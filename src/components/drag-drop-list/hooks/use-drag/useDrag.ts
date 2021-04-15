import React, {cloneElement, useEffect, useRef, useState} from "react";

import {disableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';

const useDrag = (children, swap) => {
	const [state, setState] = useState("IDLE");
	const ghostReactElementRef = useRef<any>(null);
	const ghostElementRef = useRef<any>(null);
	const containerRef = useRef<any>();
	
	const childrenBoundingRects = useRef<any>({});
	const childrenRefs = useRef<any>({})
	
	useEffect(() => {
		// https://github.com/willmcpo/body-scroll-lock/blob/master/src/bodyScrollLock.js
		disableBodyScroll(containerRef.current);
		return () => {
			clearAllBodyScrollLocks();
		};
	}, []);
	
	const dragElement = useRef<any>(null);
	const indexRef = useRef<any>(null);
	
	const [relativeMouseDownPosition, setRelativeMouseDownPosition] = useState({
		x: 0,
		y: 0,
	});
	
	const onDown = (e, index, key) => {
		indexRef.current = index;
		e.preventDefault();
		const { currentTarget } = e;
		
		const currentElement = childrenRefs.current[key]
		
		const clientX = e.clientX || e.touches[0].clientX;
		const clientY = e.clientY || e.touches[0].clientY;
		
		const rect = currentElement.getBoundingClientRect();
		
		dragElement.current = currentElement;
		dragElement.current.style.opacity = 0;
		
		ghostReactElementRef.current = cloneElement(children[index], {
			ref: (node) => {
				ghostElementRef.current = node;
				
				if (ghostElementRef.current) {
					const ghostElement = ghostElementRef.current;
					
					const x = clientX - rect.left;
					const y = clientY - rect.top;
					
					const elemLeft = clientX - x;
					const elementTop = clientY - y;
					
					ghostElement.style.position = "absolute";
					ghostElement.style.width = node.style.width || "100%";
					
					ghostElement.style.top = `${elementTop}px`;
					ghostElement.style.left = `${elemLeft}px`;
					ghostElement.style["pointer-events"] = "none";
					
					// save the mouse position on the clicked element (relative to)
					setRelativeMouseDownPosition({ x, y });
				}
				return node;
			},
		});
		setState("DRAGGING");
	};
	
	const onUp = (e) => {
		if (dragElement.current) {
			dragElement.current.style.opacity = 1;
		}
		ghostReactElementRef.current = null;
		ghostElementRef.current = null;
		setState("IDLE");
	};
	
	const _swap = (i, j) => {
		swap((array) => {
			if (i === j) {
				return array;
			}
			const newArray = [...array];
			const temp = newArray[i];
			newArray[i] = newArray[j];
			newArray[j] = temp;
			
			return newArray;
		});
	};
	
	const onMove = (e) => {
		if (state === "DRAGGING") {
			const clientY = e.clientY || e.touches[0].clientY;
			const clientX = e.clientX || e.touches[0].clientX;
			
			const draggingElement = ghostElementRef.current;
			const draggingElementKey = children[indexRef.current].key;
			
			const draggingElemLeftPos = clientX - relativeMouseDownPosition.x;
			const draggingElementTopPos = clientY - relativeMouseDownPosition.y;
			
			Object.entries(childrenBoundingRects.current).forEach(
				([childKey, childRect]: any) => {
					const isTouchingOtherElement =
						draggingElementTopPos >= childRect.top &&
						draggingElementTopPos <= childRect.bottom;
					
					const touchedElementIndex = children.findIndex(
						(child) => child.key === childKey
					);
					
					const isSelf = draggingElementKey === childKey;
					
					if (isTouchingOtherElement && !isSelf) {
						_swap(touchedElementIndex, indexRef.current);
						indexRef.current = touchedElementIndex;
					}
				}
			);
			if (draggingElement){
				draggingElement.style.top = `${draggingElementTopPos}px`;
				draggingElement.style.left = `${draggingElemLeftPos}px`;
			}
			
		}
	};
	
	useEffect(() => {
		const container = containerRef.current;
		container.addEventListener("touchmove", onMove);
		container.addEventListener("touchend", onUp);
		
		container.addEventListener("mousemove", onMove);
		container.addEventListener("mouseup", onUp);
		container.addEventListener("mouseleave", onUp);
		
		return () => {
			container.removeEventListener("touchmove", onMove);
			container.removeEventListener("touchend", onUp);
			
			container.removeEventListener("mousemove", onMove);
			container.removeEventListener("mouseup", onUp);
			container.removeEventListener("mouseleave", onUp);
		};
	}, [containerRef.current, onUp, onMove]);
	
	const addChildBoundingClientRect = (key, node) => {
		if (node) {
			childrenBoundingRects.current = {
				...childrenBoundingRects.current,
				[key]: node.getBoundingClientRect(),
			};
		}
	};
	
	const getChildProps = (child, childIndex) => {
		const key = child.key
		return {
			index: childIndex,
			ref: (node) => {
				if (node){
					addChildBoundingClientRect(child.key, node);
					childrenRefs.current = {...childrenRefs.current, [key]: node}
				}
				return node;
			},
			onTouchStart: (e) => onDown(e, childIndex, key),
			onMouseDown: (e) => onDown(e, childIndex, key),
		};
	};
	
	return {
		ref: containerRef,
		dragElement: ghostReactElementRef.current,
		getChildProps,
		dragChildren: React.Children.map(children, (child, childIndex) => {
			return React.cloneElement(child, {
				...getChildProps(child, childIndex),
			});
		}),
	};
};
export {useDrag}

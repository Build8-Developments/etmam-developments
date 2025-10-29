'use client';

import { ReactNode, Children, isValidElement, cloneElement, ReactElement } from 'react';

interface StaggerChildrenProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeIn' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  className?: string;
}

export const StaggerChildren = ({
  children,
  animation = 'fadeInUp',
  className = '',
}: StaggerChildrenProps) => {
  const animationClasses = {
    fadeInUp: 'animate-fade-in-up',
    fadeIn: 'animate-fade-in',
    fadeInLeft: 'animate-fade-in-left',
    fadeInRight: 'animate-fade-in-right',
    scaleIn: 'animate-scale-in',
  };

  const staggerDelays = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6'];

  return (
    <div className={className}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          const delayClass = staggerDelays[Math.min(index, staggerDelays.length - 1)];
          const element = child as ReactElement<any>;
          const existingClassName = (element.props?.className || '') as string;
          return cloneElement(element, {
            ...element.props,
            className: `${existingClassName} ${animationClasses[animation]} ${delayClass}`.trim(),
          });
        }
        return child;
      })}
    </div>
  );
};


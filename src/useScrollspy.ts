import throttle from 'lodash.throttle';
import {useEffect, useState} from 'react';
import {useWindowSize} from './utils/use-window-size'

type UseScrollspyParameters<Id extends string> = {
    /** Ids of the sections to watch. */
    ids: Id[];

    /** Href values of the links to apply active class to. */
    selectors: Id[];

    /** Offset from viewport top, for when the section should be considered active.
     *
     * @default 0
     */
    offset?: number | 'topCenter';

    /** Class for the anchor that links to the active section.
     *
     * @default 'active-scrollspy-item''
     */
    activeClass?: string;

    /** Id of the initially active section. */
    initialId?: Id;

    /** The number of milliseconds to throttle invocations to.
     *
     * @default 250
     */
    throttleMs?: number;

    onActivate?(element: Element): void
}

export const useScrollspy = <Id extends string>({ids, selectors, offset = 0, activeClass = 'active-scrollspy-item', initialId = ids[0], throttleMs = 250, onActivate = () => undefined}: UseScrollspyParameters<Id>): Id => {
    const [activeId, setActiveId] = useState<Id>(initialId);
    const {height}                = useWindowSize();

    const applyActiveClass = (selector: string) => {
        const elements = document.querySelectorAll(selector);
        elements?.forEach((element) => {
            element.classList.add(activeClass);
            onActivate(element);
        });
    }

    const removeActiveClass = (selector: string) => {
        const elements = document.querySelectorAll(selector);
        elements?.forEach((element) => element.classList.remove(activeClass));
    }

    const handleScroll = throttle(() => ids.forEach((id, index) => {
        const section  = document.querySelector(`#${id}`);
        const selector = selectors[index];

        if (!(section instanceof Element)) {
            return;
        }
        if (id === activeId) {
            return;
        }

        removeActiveClass(selector);

        const {top, bottom} = section.getBoundingClientRect();
        if (typeof offset === 'number' && top + offset < 0 && bottom + offset > 0) {
            setActiveId(id);
            applyActiveClass(selector);
        }

        if (offset === 'topCenter' && top <= height / 2 && bottom > height / 2) {
            setActiveId(id);
            applyActiveClass(selector);
        }
    }), throttleMs);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return activeId;
}
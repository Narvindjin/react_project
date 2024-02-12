import {useState} from 'react';

const createTabSwitch = () => {
    const [tabIndexForButton, setTabIndexForButton] = useState(0);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [currentState, setCurrentState] = useState('current');
    const [disabled, setDisabled] = useState(false)
    const ANIMATION_TIME = 150;
    const switchTab = (index:number):void => {
        if (index !== activeTabIndex) {
            requestAnimationFrame(() => {
                setDisabled(true);
                setTabIndexForButton(index);
                setCurrentState('fading');
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        setCurrentState('d-none');
                        setActiveTabIndex(index);
                        setCurrentState('fading');
                        requestAnimationFrame(() => {
                            setCurrentState('current')
                            setDisabled(false);
                        })
                    });
                }, ANIMATION_TIME)
            });
        }
    }
    return {
        tabIndexForButton: tabIndexForButton,
        tabIndex: activeTabIndex,
        currentState: currentState,
        disabled: disabled,
        switchToTab: switchTab,
    }
}

export {createTabSwitch}

import {patch,elementOpen,elementClose,text,elementVoid} from 'incremental-dom'

function createEvents(){
    let eventName = /on[A-Z]/;
    let element = elementOpen.apply(null,[...arguments]);
    Object.keys(element).filter((event)=>eventName.test(event)).forEach((event)=>{
        element.addEventListener(event.replace('on','').toLowerCase(),element[event]);
    });
}
export const Dom= {
    patch:patch,
    open:createEvents,
    close:elementClose,
    void:elementVoid,
    text:text,
    INCREMENTALDATA:'__incrementalDOMData'
}
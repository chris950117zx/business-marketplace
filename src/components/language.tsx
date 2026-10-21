"use client";
import{createContext,useContext,useEffect,useState}from"react";
type Locale="zh"|"en";type Value={locale:Locale;setLocale:(locale:Locale)=>void};const LanguageContext=createContext<Value>({locale:"zh",setLocale:()=>undefined});
export function LanguageProvider({children}:{children:React.ReactNode}){const[locale,setLocaleState]=useState<Locale>("zh");useEffect(()=>{if(window.localStorage.getItem("jbccci-locale")==="en"){const timer=window.setTimeout(()=>setLocaleState("en"),0);return()=>window.clearTimeout(timer)}},[]);function setLocale(next:Locale){setLocaleState(next);window.localStorage.setItem("jbccci-locale",next);document.documentElement.lang=next==="zh"?"zh-CN":"en"}return <LanguageContext.Provider value={{locale,setLocale}}>{children}</LanguageContext.Provider>}
export function useLanguage(){return useContext(LanguageContext)}export function Text({zh,en}:{zh:React.ReactNode;en:React.ReactNode}){const{locale}=useLanguage();return <>{locale==="zh"?zh:en}</>}

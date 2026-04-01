import { createContext, useContext, useState, useEffect } from 'react'
import en from '../locales/en.json'
import zh from '../locales/zh.json'

const translations = { en, zh }
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const toggle = () => setLang(prev => prev === 'en' ? 'zh' : 'en')

  // Sync <html lang="..."> so [lang="zh"] body CSS rule triggers Noto Sans TC
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

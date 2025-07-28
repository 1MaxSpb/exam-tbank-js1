# Веб-резюме

Веб-страница с резюме по [шаблону Figma](https://www.figma.com/design/0lCK90FekbMPNJOOUuiIV8/exam-cv?node-id=0-198&t=7k5zuZTt1vpdNfig-0).

## Возможности
- Редактирование всех текстовых элементов (contenteditable)
- Сохранение данных в LocalStorage
- Кнопка "Скачать PDF" (html2canvas + jsPDF)
- CSS-анимации и эффект Material Wave (ripple)
- Адаптивная верстка

## 🔧 Установка и запуск

1. **Клонировать репозиторий:**
   ```bash
   git clone https://github.com/1MaxSpb/exam-tbank-js1.git
   cd exam-tbank-js1
   ```

2. **Открыть в браузере:**
   Откройте файл index.html в вашем браузере. Дополнительных установок не требуется.

## 🚀 GitHub Pages Deployment

Сайт автоматически развертывается на GitHub Pages при каждом push в главную ветку.

### Ссылка на сайт:
🌐 **[https://1maxspb.github.io/exam-tbank-js1/](https://1maxspb.github.io/exam-tbank-js1/)**

### Автоматическое развертывание:
- Настроен GitHub Actions workflow для автоматического развертывания
- Сайт обновляется автоматически при изменениях в коде
- Используется стандартная настройка GitHub Pages

### Ручная настройка (если необходимо):
1. Перейти в Settings → Pages
2. Выбрать Source: "Deploy from a branch"
3. Выбрать ветку: `main` (или `master`)
4. Выбрать папку: `/ (root)`

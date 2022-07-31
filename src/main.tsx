import { CwMuskAppender } from './adapter/cw-mask/dom/appender/CwMuskAppender'

window.onload = () => setTimeout(main, 1000)

const main = () => {
    CwMuskAppender.append()
}

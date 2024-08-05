import { cuteAlert } from 'cute-alert'
import { cuteToast } from 'cute-alert'
const success_alert = (title,desc,timer=2000,primaryButtonText='confirm',secondaryButtonText='cancel')=>{
    cuteAlert({
        type: 'success',
        title: title,
        description: desc,
        timer: timer,
        primaryButtonText: primaryButtonText,
        secondaryButtonText: secondaryButtonText
    })
}
const success_toast = (title,desc,timer=2000)=>{
    cuteToast({
        type: 'success',
        title: title,
        description: desc,
        timer: timer
        })
}
const error_alert = (title,desc,timer=2000,primaryButtonText='confirm',secondaryButtonText='cancel')=>{
    cuteAlert({
        type: 'error',
        title: title,
        description: desc,
        timer: timer,
        primaryButtonText: primaryButtonText,
        secondaryButtonText: secondaryButtonText
    })
}
const alerts={
    "success_alert":success_alert,
    "success_toast":success_toast,
    "error_alert":error_alert

}
export {alerts};
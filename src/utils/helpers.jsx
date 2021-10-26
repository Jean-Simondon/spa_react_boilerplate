import jwt_decode from "jwt-decode";
import {DateTime, Interval} from "luxon";


export function getErrorMsgFromSymfonyResponse(error) {
  if (error.response !== undefined) {
    if (error.response.data.message === 'Validation Failed' && error.response.data.errors) {
      for (let field in error.response.data.errors.children) {
        if (error.response.data.errors.children[field].errors && error.response.data.errors.children[field].errors.length > 0) {
          return error.response.data.errors.children[field].errors[0]
        }
      }

    } else if (error.response.data.message !== undefined) {
      return error.response.data.message
    }
  }

  const reportBlobObjUrl = URL.createObjectURL(
    new Blob([JSON.stringify({ error, responseData: error.response?.data })], { type: 'application/json' })
  )
  const reportFileName = `gk-error_${DateTime.local().toFormat('dd-LL-yy_HH-mm')}.json`

  return (
    <>
      <span>Une erreur est survenue </span>
      <a href={reportBlobObjUrl} download={reportFileName}>rapport</a>
    </>
  )
}

export function formatSymfonyValidationErrors(errors) {
  return Object.entries(errors.children)
    .filter(([key, value]) => 'errors' in value)
    .map(([key, value]) => [key, { message: value.errors[0] }])
}

export function getCSSHeight(element, withoutPadding=false) {
  const rect = element.getBoundingClientRect()

  if (withoutPadding) {
    const computedStyle = getComputedStyle(element)
    return rect.bottom - rect.top - parseInt(computedStyle.getPropertyValue('padding-top')) - parseInt(computedStyle.getPropertyValue('padding-bottom'))
  }

  return rect.bottom - rect.top
}

export function getCSSWidth(element, withoutPadding=false) {
  const rect = element.getBoundingClientRect()

  if (withoutPadding) {
    const computedStyle = getComputedStyle(element)
    return rect.right - rect.left - parseInt(computedStyle.getPropertyValue('padding-left')) - parseInt(computedStyle.getPropertyValue('padding-right'))
  }

  return rect.right - rect.left
}

export function fileToBase64(fileInput) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileInput);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  })
}

/**
 * @param {number} x
 * @param {boolean} showSign
 * @returns {string | number}
 */
export function formatCurrency(x, showSign) {
  if(x == null){
    return 0
  }
  const sign = showSign && x > 0 ? "+" : ""

  return sign + x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' €';
}

export function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getRandomColor(){
  let colors = [
      "#c2185b",
      "#7b1fa2",
      "#512da8",
      "#303f9f",
      "#1976d2",
      "#00838f",
      "#00796b",
      "#2e7d32",
  ]
  let randKey = Math.floor(Math.random() * 8)
  return colors[randKey]
}

export function getRoleFromToken() {
  let localAuth = localStorage.getItem('auth')
  localAuth = JSON.parse(localAuth)
  if (localAuth) {
    let decoded = jwt_decode(localAuth.token);
    if (decoded) {
      if (decoded.roles.includes('ROLE_ADMIN') || decoded.roles.includes('ROLE_SUPER_ADMIN')) {
        return 'GK'
      }
      if (decoded.roles.includes('ROLE_USER')) {
        return 'USER'
      }
    }
  }
  return false;
}

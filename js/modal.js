export const alert = (params) => {
  return new Promise((resolve) => {
    this.$q
      .dialog({
        ...params,
        ok: '확인',
        persistent: true,
      })
      .onOk(() => {
        resolve(true)
      })
      .onDismiss(() => {
        resolve('dismiss')
      })
  })
}
export const confirm = (params) => {
  return new Promise((resolve) => {
    this.$q
      .dialog({
        ...params,
        ok: '확인',
        cancel: '취소',
        persistent: true,
      })
      .onOk(() => {
        resolve(true)
      })
      .onCancel(() => {
        resolve(false)
      })
      .onDismiss(() => {
        resolve('dismiss')
      })
  })
}
export const prompt = (params) => {
  return new Promise((resolve) => {
    this.$q
      .dialog({
        ...params,
        prompt: {
          model: '',
          type: 'text', // optional
        },
        ok: '확인',
        cancel: '취소',
        persistent: true,
      })
      .onOk((data) => {
        resolve(data)
      })
      .onCancel(() => {
        resolve(false)
      })
      .onDismiss(() => {
        resolve('dismiss')
      })
  })
}

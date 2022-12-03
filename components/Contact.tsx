import React from 'react'
import moment from 'moment'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from './Input'
import { Contact as ContactProps, InputsForm } from '../types'

interface Props {
  contactTemplate: {
    contact: ContactProps[]
  }
}

const Contact = React.forwardRef<HTMLFormElement, Props>(({ contactTemplate }, ref) => {
  const { title, desc, subDesc, adress } = contactTemplate?.contact[0]
  const methods = useForm<InputsForm>()
  const { register, reset, handleSubmit, setValue, formState: { errors } } = methods

  const nameInput = register('name', {
    required: {
      value: true,
      message: 'You must enter your first and last name'
    }
  })
  const amountInput = register('amount', {
    required: {
      value: true,
      message: 'You must enter the number of guests'
    }
  })
  const dateInput = register('date')
  const messageInput = register('message', {
    required: {
      value: true,
      message: 'This field is required'
    }
  })

  React.useEffect(() => {
    const today = new Date()
    const now = moment(today).format('YYYY-MM-DD[T]HH:mm')

    setValue('date', now)

    return () => setValue('date', now)
  }, [setValue])

  const onSubmit: SubmitHandler<InputsForm> = (data) => {
    console.log(data)
    reset(formValues => ({
      ...formValues,
      name: '',
      amount: 0,
      message: ''
    }))
  }

  return (
    <form
      id={'contact'}
      className={'py-16 px-4'}
      ref={ref}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className={'my-1'}>{title}</h2>
      <br />
      <p className={'my-4'}>
        {desc}
      </p>
      <p className={'text-md text-[#607d8b] my-4'}>
        {adress}
      </p>
      <p className={'my-4'}>
        {subDesc}
      </p>

      <Input
        placeholder={'Name'}
        type={'text'}
        errorMessage={errors?.name?.message}
        {...nameInput}
      />

      <Input
        placeholder={'How many people'}
        type={'number'}
        errorMessage={errors?.amount?.message}
        {...amountInput}
      />

      <Input
        placeholder={'Date and time'}
        type={'datetime-local'}
        errorMessage={errors?.date?.message}
        {...dateInput}
      />

      <Input
        placeholder={'Message \\ Special requirements'}
        type={'text'}
        errorMessage={errors?.message?.message}
        {...messageInput}
      />

      <button className={'px-4 py-2 my-4 bg-gray-200 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300'}>
        SEND MESSAGE
      </button>
    </form >
  )
})

Contact.displayName = 'Contact'

export default Contact

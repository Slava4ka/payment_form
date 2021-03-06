import React from 'react'
import style from '../../Сheckout/StepsCommonStyle.module.scss'

const RenderInputField = ({
	input,
	label,
	type,
	meta: { touched, error, warning },
	disabled,
	className,
}) => {
	const hasError = touched && error

	return (
		<div className={className}>
			<input
				{...input}
				className={hasError ? style.input_error : ''}
				placeholder={label}
				type={type}
				value={input.value}
				disabled={disabled}
				onBlur={() => console.log(input.value)}
			/>
		</div>
	)
}

export default RenderInputField

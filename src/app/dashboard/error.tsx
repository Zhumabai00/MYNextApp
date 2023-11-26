"use client"

interface ErrorProps {
	error: Error
}

const ErrorWrapper = ({ error }: ErrorProps) => {
	return (
		<div>error {error.message}</div>
	)
}

export default ErrorWrapper

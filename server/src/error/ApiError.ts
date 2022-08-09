export class ApiError extends Error {
	status: number;
	message: string;

	constructor(status: number, message: string) {
		super();
		this.status = status;
		this.message = message;
	}

	static badRequest(message: string): ApiError {
		return new ApiError(400, message);
	}

	static notFound(message: string): ApiError {
		return new ApiError(404, message);
	}

	static internalError(message: string): ApiError {
		return new ApiError(500, message);
	}

	static forbidden(message: string): ApiError {
		return new ApiError(403, message);
	}

	static unauthorized(message: string): ApiError {
		return new ApiError(401, message);
	}
}

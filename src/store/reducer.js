const initialState = {
	user: {},
	uid: "",
	isLoading: false,
};

export const setUser = (state = initialState, action) => {
	switch (action.type) {
		case "SIGN_UP_PENDING":
			return { ...state, isLoading: true };

		case "SIGN_UP": {
			const { userName, email, password, uid } = action.payload;
			return {
				...state,
				user: { userName, email, password },
				uid: uid,
				isLoading: false,
			};
		}

		case "SIGN_UP_ERROR":
			return {
				...state,
				isLoading: false,
			};

		case "LOGIN_PENDING":
			return { ...state, isLoading: true };

		case "LOGIN":
			return {
				...state,
				user: action.payload,
				isLoading: false,
			};

		case "LOGIN_ERROR":
			return {
				...state,
				isLoading: false,
			};

		case "LOG_OUT_PENDING":
			return {
				...state,
				isLoading: true,
			};

		case "LOG_OUT":
			return {
				...state,
				user: {},
				isLoading: false,
			};

		case "LOG_OUT_ERROR":
			return {
				...state,
				isLoading: false,
			};

		default:
			return state;
	}
};

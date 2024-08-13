import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
	imageUrl: string;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
			const itemExists = state.find((item) => item.id === action.payload.id);
			if (itemExists) {
				itemExists.quantity++;
			} else {
				state.push({ ...action.payload, quantity: 1 });
			}
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			return state.filter((item) => item.id !== action.payload);
		},
		updateQuantity: (
			state,
			action: PayloadAction<{ id: string; quantity: number }>
		) => {
			const item = state.find((item) => item.id === action.payload.id);
			if (item) {
				item.quantity = action.payload.quantity;
			}
		},
		clearCart: (state) => {
			return [];
		},
	},
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
	cartSlice.actions;
export const cartReducer = cartSlice.reducer;

import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { TypeState } from '../redux/store';

export const useTypedSelector: TypedUseSelectorHook<TypeState> = useSelector;

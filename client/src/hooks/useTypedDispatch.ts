import { useDispatch } from 'react-redux';

import { TypeDispatch } from '../redux/store';

export const useTypedDispatch = () => useDispatch<TypeDispatch>();

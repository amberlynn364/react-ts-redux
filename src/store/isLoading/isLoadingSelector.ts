import { RootState } from '../store';

const selectIsLoading = (state: RootState) => state.isLoading.isLoading;

export default selectIsLoading;

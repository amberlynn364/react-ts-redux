import { RootState } from '../store';

const selectShowAlert = (state: RootState) => state.showAlert.showAlert;

export default selectShowAlert;

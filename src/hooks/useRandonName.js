import { namesList } from '../list';

export const useRandomName = () => {
    const randomIndex = Math.floor(Math.random() * namesList.length);
    return namesList[randomIndex];
}
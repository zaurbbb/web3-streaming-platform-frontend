import { postersList } from '../list/list';

export const useRandomPoster = () => {
    const randomIndex = Math.floor(Math.random() * postersList.length);
    return postersList[randomIndex];
}
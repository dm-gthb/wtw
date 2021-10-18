import {useDispatch, useSelector} from 'react-redux';
import {MAX_FILMS_CARDS_TO_RENDER_ONCE} from '../constants';
import {increaseCardsCount, selectCardsCount} from '../store/films-filter/films-filter';

export const useFilmCardsCount = (initCount) => {
  const dispatch = useDispatch();
  const currentCardsCount = useSelector(selectCardsCount);

  const increaseCount = () => {
    const remainingCardsCount = initCount - currentCardsCount;
    const countToIncrease = Math.min(remainingCardsCount, MAX_FILMS_CARDS_TO_RENDER_ONCE);
    dispatch(increaseCardsCount(countToIncrease));
  };

  return [currentCardsCount, increaseCount];
};

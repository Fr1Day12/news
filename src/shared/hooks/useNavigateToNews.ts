import { INews } from "@/entities/news";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useNavigateToNews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return { navigateTo };
};

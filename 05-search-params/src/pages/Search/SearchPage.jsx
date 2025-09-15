import { useSearchParams } from 'react-router';
import styles from './Search.module.css';

const questions = [
  'React Router가 무엇인가요?',
  'useParams는 언제 사용하나요?',
  'useSearchParams와 useParams의 차이점은?',
  'React의 장점은 무엇인가요?',
];

export function SearchPage() {
  const query = null;
  const sort = null;

  const filteredQuestions = [];

  const handleSubmit = (event) => {
    e.preventDefault();
  };

  const handleClickButton = (sortType) => {};

  return (
    <div className={styles.page}>
      <h2>질문 검색</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="search" name="q" defaultValue={query || ''} />
        <button type="submit">검색</button>
      </form>

      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={() => handleClickButton('asc')}
          disabled={sort === 'asc'}
        >
          오름차순 정렬
        </button>
        <button
          onClick={() => handleClickButton('desc')}
          disabled={sort === 'desc'}
        >
          내림차순 정렬
        </button>
      </div>

      <hr />

      <h3>검색 결과</h3>
      <p>검색어를 입력해주세요.</p>
    </div>
  );
}

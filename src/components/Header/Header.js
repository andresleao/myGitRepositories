import * as S from './styled';

function Header() {
  return (
    <S.Header>
      <S.Title>
        <S.GitLogo size={60} />
        My Git<span style={{ color: '#f25bdb' }}>Repositories</span>
      </S.Title>
    </S.Header>
  );
}

export default Header;

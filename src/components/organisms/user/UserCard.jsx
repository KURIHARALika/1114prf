import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        widh={160}
        src="https://images.unsplash.com/photo-1689720358443-d63af51382d1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="プロフィール"
      />
      <p>名前</p>
      <SDL>
        <dt>メール</dt>
        <dd>414141@mo.ne.jp</dd>
        <dt>TEL</dt>
        <dd>4144-141-4141</dd>
        <dt>会社名</dt>
        <dd>株式会社DDDDD</dd>
        <dt>WEB</dt>
        <dd>hsydke.sdada</dd>
      </SDL>
    </div>
  );
};

const SDL = styled.dl`
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;

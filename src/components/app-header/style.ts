import styled from "styled-components"

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;
  .header-content {
    display: flex;
    justify-content: center;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .title-list {
    display: flex;
    line-height: 75px;

    .title-item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      &:hover a,
      .active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: 42px;

  .my-input {
    width: 158px;
    height: 32px;
    background-position: 0 -99px;
    background-color: #fff;
    border-radius: 32px;
    ::-webkit-input-placeholder {
      font-size: 12px;
      color: #9b9b9b;
    }
  }

  .login-btn {
    margin-left: 20px;
    font-size: 12px;
    color: #787878;
    cursor: pointer;
  }
`

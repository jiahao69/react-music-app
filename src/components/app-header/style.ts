import styled from "styled-components"

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;
  .header-content {
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
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
    line-height: 70px;

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

  .creator-btn {
    width: 90px;
    height: 32px;
    box-sizing: border-box;
    padding-left: 16px;
    margin-left: 12px;
    border: 1px solid #4f4f4f;
    background-position: 0 -140px;
    line-height: 33px;
    color: #ccc;
    font-size: 12px;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      border: 1px solid #fff;
    }
  }

  .login-btn {
    margin-left: 20px;
    font-size: 12px;
    color: #787878;
    cursor: pointer;
  }
`

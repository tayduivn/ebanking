import React from 'react'
import { Layout, Menu, Button } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import './style.less'

import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

const { Header } = Layout

function AppBar (props) {
  // console.log(props.match.path.split('/')[1])
  return (
    <Header className='myHeader'>
      <Button
        type='primary'
        shape='circle'
        icon='left'
        style={{
          backgroundColor: 'transparent',
          color: '#fff',
          border: 'none',
          margin: '20px'
        }}
        onClick={() => {
          props.history.goBack()
        }}
      />
      <div className='titleAppBar'>{props.store.appBar.title}</div>
      <Menu
        mode='horizontal'
        defaultSelectedKeys={props.match.path.split('/')[1] || 'dashboard'}
      >

        <Menu.Item
          onClick={() => props.history.push('/dashboard')}
          key='dashboard'
        >
          Trang chủ
        </Menu.Item>

        <Menu.Item
          key='taikhoan'
          onClick={() => props.history.push('/taikhoan')}
        >
          Tài khoản
        </Menu.Item>

        <Menu.Item key='chuyentien'>Chuyển tiền</Menu.Item>
        <SubMenu
          title={(
            <span className='submenu-title-wrapper'>
              Thanh toán
            </span>
          )}
        >
          <Menu.ItemGroup title='Item 1'>
            <Menu.Item key='setting:1'>Option 1</Menu.Item>
            <Menu.Item key='setting:2'>Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title='Item 2'>
            <Menu.Item key='setting:3'>Option 3</Menu.Item>
            <Menu.Item key='setting:4'>Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      <div
        className='logout'
        onClick={() => {
          console.log('logggout')
        }}
      >
        Đăng xuất
      </div>
    </Header>
  )
}
export default withRouter(inject('store')(observer(AppBar)))
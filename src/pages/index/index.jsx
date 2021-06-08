import React from 'react';
import { View } from '@tarojs/components';
import { connect } from 'react-redux';
import './index.less';
// eslint-disable-next-line
const Index = React.forwardRef((props, ref) => {
  const {
    global: { data },
  } = props;
  const html = `
    <div class="table-responsive-sm">
      <table class="table table-hover text-nowrap table-responsive">
       <thead>
        <tr class="bg-warning">
          <th scope="col" class="center">组织</th>
          <th scope="col" class="center">货源结构</th>
          <th scope="col" class="center">时实货量</th>
          <th scope="col" class="center">票数</th>
          <th scope="col" class="center">环比昨日</th>
          <th scope="col" class="center">环比增长率</th>
          <th scope="col" class="center">同比增长</th>
          <th scope="col" class="center">同比增长率</th>
          <th scope="col" class="center">票均重</th>
        </tr>
      </thead>
     <tbody>
        ${data
    .map(
      itm => `
          <tr key={itm.id}>
            <th scope="row" class="center">${itm.city}</th>
            <td class="center">${itm.name}</td>
            <td class="center">${itm.name2}</td>
            <td class="center">${itm.name3}</td>
            <td class="center">${itm.name4}</td>
            <td class="center">${itm.name5}</td>
            <td class="center">${itm.name6}</td>
            <td class="center">${itm.name7}</td>
            <td class="center">${itm.name8}</td>
          </tr>
        `,
    )
    .join('')}
      </tbody>
    </table>
  </div>
`;
  return (
    <View class="index">
      <View dangerouslySetInnerHTML={{ __html: html }}></View>
    </View>
  );
});
export default connect(state => ({
  global: state.global,
}))(Index);

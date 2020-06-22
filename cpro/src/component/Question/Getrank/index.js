// import React, { Component } from 'react';
// import axios from 'axios'
// class index extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             list: []
//         }
//     }
//     getrank = () => {
//         axios.get('/api/user/ranking?_=c5b10dfde8fb036739fbd0b04f062ace').then((res) => {
//             if (res.data.status === 0) {
//                 this.setState({
//                     list: res.data.data
//                 })
//             }
//         }).catch(function (error) {
//             console.log(error)
//         })
//     }
//     componentDidMount() {
//         this.getrank()
//     }
//     render() {
//         console.log(this.state.list)
//         if (this.state.list) {
//             return (
//                 this.state.list.daily.map((item) => {
//                     return (
//                         <div>
//                             123
//                         </div>
//                     )
//                 })
//             );
//         }
//     }
// }
// export default index
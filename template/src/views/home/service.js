/*
 * @Author: SHJ
 * @Date: 2018-06-22 14:38:16
 * @Last Modified by: SHJ
 * @Last Modified time: 2018-06-22 14:54:14
 */

import net from '@net'
const { userListAll } = net

let service = {
  getListAll() {
    return userListAll()
  }
}

export default service

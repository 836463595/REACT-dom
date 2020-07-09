var Storage={   //自定义封装一个数据持久化的组件
  set(key, value){//增加
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key){//获取
    return JSON.parse(localStorage.getItem(key));
  },
  remove(key){//删除
    localStorage.removeItem(key);
  }
};

export default Storage;

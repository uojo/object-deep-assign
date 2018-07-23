var deepAssign = require('../')

describe('对象', function () {
  var obj1 = {
    'a': 1
  };

  var obj3 = {
    a: 1,
    b: {
      c: 3,
      d: [
        {id: 1, name: 'apple'},
        {id: 2, name: 'orange'}
      ]
    },
    e: ['hello', 100, null, undefined]
  }

  var obj2 = {
    'a': {
      'b': 1
    }
  };

  var obj4={
    b:{
      c:4,
      f:{a:1}
    }
  }
  var tests = [
    ,{exp:deepAssign({}, obj1, obj2), message:'拷贝多个有重复属性的对象'}
  ]

  test("拷贝一个普通对象",function(){
    expect( deepAssign({}, obj1) ).toEqual(obj1)
  })

  test("拷贝一个深度对象",function(){
    expect( deepAssign({}, obj3) ).toEqual(obj3)
  })
  
  let rlt1 = deepAssign({}, obj3, obj2, obj4)
  test("拷贝多个对象",function(){
    // 对象
    expect( rlt1.a ).toEqual(obj2.a)
    expect( rlt1.a ).not.toBe(obj2.a)
    expect( rlt1.b.f ).toEqual(obj4.b.f)
    expect( rlt1.b.f ).not.toBe(obj4.b.f)
    // 数组
    expect( rlt1.b.d ).toEqual(obj3.b.d)
    expect( rlt1.b.d ).not.toBe(obj3.b.d)

    expect(obj3.a).toBe(1)
    expect(obj3.b.c).toBe(3)
    expect(obj3.b).not.toHaveProperty('f')
  })

})

describe('数组', function () {
  let d1={a:1,b:{a:1}}
  test("拷贝一个数组到数组",function(){
    expect( deepAssign([], [d1]) ).toEqual(undefined)
  })
  
})

describe('特殊情况', function () {
  test("不传入任何参数",function(){
    expect(deepAssign()).toEqual(false)
  })

  // 各自情况
  var tests = [
    ,{exp:deepAssign({}), message:'只有一个参数,返回自身'}
    ,{exp:deepAssign({}, document.createElement('div')), message:'拷贝DOM对象'}
    ,{exp:deepAssign({}, 123), message:'拷贝Number,会成为目标对象属性'}
    ,{exp:deepAssign({}, '123'), message:'拷贝String,会成为目标对象属性'}
    ,{exp:deepAssign({}, undefined), message:'拷贝undefined,会成为目标对象属性'}
    ,{exp:deepAssign({}, true), message:'拷贝Boolean,会成为目标对象属性'}
    ,{exp:deepAssign({}, function() {}), message:'拷贝function,会成为目标对象属性'}
    ,{exp:deepAssign({}, { [Symbol('foo')]: 2 }), message:'拷贝Symbol,会成为目标对象属性'}
    ,{exp:deepAssign({}, []), message:'拷贝一个空数组'}
    ,{exp:deepAssign({}, [1,2]), message:'拷贝一个数组'}
  ]
  tests.forEach(el => {
    // console.log(el)
    test(el.message,function(){
      // console.log(el.message,el.exp)
      expect(el.exp).toEqual({})
    })
  });


})



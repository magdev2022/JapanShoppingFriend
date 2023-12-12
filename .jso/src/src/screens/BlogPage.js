  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[2]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[3]);
  var _reactNativeLoadingSpinnerOverlay = _$$_REQUIRE(_dependencyMap[0])(_$$_REQUIRE(_dependencyMap[4]));
  var SyncIcon = function SyncIcon(props) {
    return (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).Icon, Object.assign({}, props, {
      name: "sync"
    }));
  };
  var CalendarIcon = function CalendarIcon(props) {
    return (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).Icon, Object.assign({}, props, {
      name: "calendar"
    }));
  };
  var BlogPage = function BlogPage() {
    var _React$useState = _react.default.useState(true),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      init = _React$useState2[0],
      setinit = _React$useState2[1];
    var _React$useState3 = _react.default.useState([]),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      blogs = _React$useState4[0],
      setblogs = _React$useState4[1];
    var _React$useState5 = _react.default.useState([]),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      FilteredBlogs = _React$useState6[0],
      SetFilteredBlogs = _React$useState6[1];
    var _React$useState7 = _react.default.useState(new Date()),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      selectDate = _React$useState8[0],
      setSelectDate = _React$useState8[1];
    var _React$useState9 = _react.default.useState(true),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      spinner = _React$useState10[0],
      setspinner = _React$useState10[1];
    var _React$useState11 = _react.default.useState(true),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      newChecked = _React$useState12[0],
      setNewsChecked = _React$useState12[1];
    var _React$useState13 = _react.default.useState(true),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      saleChecked = _React$useState14[0],
      setSaleChecked = _React$useState14[1];
    var _React$useState15 = _react.default.useState(true),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      raffleChecked = _React$useState16[0],
      setRaffleChecked = _React$useState16[1];
    var _React$useState17 = _react.default.useState(false),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      useDate = _React$useState18[0],
      setUseDate = _React$useState18[1];
    var layout = (0, _reactNative.useWindowDimensions)();
    var _React$useState19 = _react.default.useState(0),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      index = _React$useState20[0],
      setIndex = _React$useState20[1];
    var _React$useState21 = _react.default.useState([{
        key: 'allroute',
        title: '全部'
      }, {
        key: 'sneaker',
        title: 'スニーカー'
      }, {
        key: 'pokemon',
        title: 'ポケモン'
      }, {
        key: 'console',
        title: 'コンソール'
      }, {
        key: 'clothe',
        title: '衣服'
      }, {
        key: 'toy',
        title: 'Toy'
      }]),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 1),
      routes = _React$useState22[0];
    var ShowAllRoute = function ShowAllRoute() {
      return (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNative.View, {
        children: (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNative.ScrollView, {
          children: FilteredBlogs.map(function (blog) {
            return (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Blog, {
              info: blog
            }, blog.title);
          })
        })
      });
    };
    var SneakerRoute = function SneakerRoute() {
      return (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNative.View, {
        children: (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNative.ScrollView, {
          children: FilteredBlogs.map(function (blog) {
            return blog.category == "スニーカー" ? (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Blog, {
              info: blog
            }, blog.title) : null;
          })
        })
      });
    };
    var PokemonRoute = function PokemonRoute() {
      return (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNative.View, {
        children: (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNative.ScrollView, {
          children: FilteredBlogs.map(function (blog) {
            return blog.category == "ポケモンカード" ? (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Blog, {
              info: blog
            }, blog.title) : null;
          })
        })
      });
    };
    var ConsoleRoute = function ConsoleRoute() {
      return (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNative.View, {
        children: (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNative.ScrollView, {
          children: FilteredBlogs.map(function (blog) {
            return blog.category == "コンソール" ? (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Blog, {
              info: blog
            }, blog.title) : null;
          })
        })
      });
    };
    var ClotheRoute = function ClotheRoute() {
      return (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNative.View, {
        children: (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNative.ScrollView, {
          children: FilteredBlogs.map(function (blog) {
            return blog.category == "衣服" ? (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Blog, {
              info: blog
            }, blog.title) : null;
          })
        })
      });
    };
    var ToyRoute = function ToyRoute() {
      return (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNative.View, {
        children: (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNative.ScrollView, {
          children: FilteredBlogs.map(function (blog) {
            return blog.category == "玩具" ? (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[7]).Blog, {
              info: blog
            }, blog.title) : null;
          })
        })
      });
    };
    var renderScene = (0, _$$_REQUIRE(_dependencyMap[8]).SceneMap)({
      allroute: ShowAllRoute,
      sneaker: SneakerRoute,
      pokemon: PokemonRoute,
      console: ConsoleRoute,
      clothe: ClotheRoute,
      toy: ToyRoute
    });
    var fetchdata = function fetchdata() {
      fetch("http://43.207.48.120/api/post/posts").then(function (res) {
        return res.json();
      }).then(function (result) {
        setblogs(result);
        if (init) {
          SetFilteredBlogs(result);
        }
        setspinner(false);
      }, function (error) {
        console.log(error);
        setblogs([]);
        setspinner(false);
      });
    };
    _react.default.useEffect(function () {
      if (init) {
        console.log("init data");
        fetchdata();
        setinit(false);
      }
    }, [blogs]);
    var handleRefreshBlog = function handleRefreshBlog() {
      setspinner(true);
      fetchdata();
      filterBlog();
    };
    var renderTabBar = function renderTabBar(props) {
      return (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[8]).TabBar, Object.assign({}, props, {
        indicatorStyle: {
          backgroundColor: 'white'
        },
        style: {
          backgroundColor: '#EEE'
        },
        scrollEnabled: true,
        activeColor: "blue",
        inactiveColor: "black"
      }));
    };
    var handleNewsChecked = function handleNewsChecked(checked) {
      setNewsChecked(checked);
      var filterBlogs = filterdata(blogs, useDate, selectDate, checked, saleChecked, raffleChecked);
      SetFilteredBlogs(filterBlogs);
    };
    var handleSaleChecked = function handleSaleChecked(checked) {
      setSaleChecked(checked);
      var filterBlogs = filterdata(blogs, useDate, selectDate, newChecked, checked, raffleChecked);
      SetFilteredBlogs(filterBlogs);
    };
    var handleRaffleChecked = function handleRaffleChecked(checked) {
      setRaffleChecked(checked);
      var filterBlogs = filterdata(blogs, useDate, selectDate, newChecked, saleChecked, checked);
      SetFilteredBlogs(filterBlogs);
    };
    var filterBlog = function filterBlog() {
      var filterBlogs = filterdata(blogs, useDate, selectDate, newChecked, saleChecked, raffleChecked);
      SetFilteredBlogs(filterBlogs);
    };
    var handleSelectDate = function handleSelectDate(nextDate) {
      setSelectDate(nextDate);
      var filterBlogs = filterdata(blogs, useDate, nextDate, newChecked, saleChecked, raffleChecked);
      SetFilteredBlogs(filterBlogs);
    };
    var filterdata = function filterdata(blogs, usedate, selectdate, newchecked, salechecked, rafflechecked) {
      var filterBlogs = [];
      if (usedate) {
        for (var _index = 0; _index < blogs.length; _index++) {
          var element = blogs[_index];
          if (new Date(element.date).getDate() == selectdate.getDate() && new Date(element.date).getMonth() == selectdate.getMonth()) {
            if (element.selltype == "消息" && newchecked) {
              filterBlogs.push(blogs[_index]);
            } else if (element.selltype == "オンライン販売" && salechecked) {
              filterBlogs.push(blogs[_index]);
            } else if (element.selltype == "抽選" && rafflechecked) {
              filterBlogs.push(blogs[_index]);
            }
          }
        }
      } else {
        for (var _index2 = 0; _index2 < blogs.length; _index2++) {
          var _element = blogs[_index2];
          if (_element.selltype == "消息" && newchecked) {
            filterBlogs.push(blogs[_index2]);
          } else if (_element.selltype == "オンライン販売" && salechecked) {
            filterBlogs.push(blogs[_index2]);
          } else if (_element.selltype == "抽選" && rafflechecked) {
            filterBlogs.push(blogs[_index2]);
          }
        }
      }
      return filterBlogs;
    };
    var handleUseDate = function handleUseDate(checked) {
      setUseDate(checked);
      var filterBlogs = filterdata(blogs, checked, selectDate, newChecked, saleChecked, raffleChecked);
      SetFilteredBlogs(filterBlogs);
    };
    return (0, _$$_REQUIRE(_dependencyMap[5]).jsxs)(_$$_REQUIRE(_dependencyMap[5]).Fragment, {
      children: [(0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_reactNativeLoadingSpinnerOverlay.default, {
        visible: spinner,
        textContent: '更新中...',
        textStyle: {
          color: "#EEE"
        },
        overlayColor: "rgba(0, 0, 0, 0.6)"
      }), (0, _$$_REQUIRE(_dependencyMap[5]).jsxs)(_$$_REQUIRE(_dependencyMap[6]).Layout, {
        style: titlestyles.container,
        children: [(0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).Text, {
          category: "h5",
          children: "\u4ECA\u65E5\u306E\u4EBA\u6C17\u8A18\u4E8B"
        }), (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).Button, {
          style: titlestyles.button,
          appearance: "ghost",
          status: "primary",
          accessoryLeft: SyncIcon,
          onPress: handleRefreshBlog
        })]
      }), (0, _$$_REQUIRE(_dependencyMap[5]).jsxs)(_reactNative.View, {
        style: {
          flexDirection: 'row',
          marginBottom: 5,
          marginTop: 5,
          marginLeft: 10
        },
        children: [(0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).CheckBox, {
          status: "basic",
          checked: useDate,
          onChange: handleUseDate,
          children: "\u65E5\u4ED8\u304B\u3089\u9078\u3076"
        }), (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).Datepicker, {
          date: selectDate,
          onSelect: handleSelectDate,
          accessoryRight: CalendarIcon,
          style: datestyles.container
        })]
      }), (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).Divider, {}), (0, _$$_REQUIRE(_dependencyMap[5]).jsxs)(_$$_REQUIRE(_dependencyMap[6]).Layout, {
        style: checkstyles.container,
        level: "1",
        children: [(0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).CheckBox, {
          checked: newChecked,
          onChange: handleNewsChecked,
          style: checkstyles.checkbox,
          status: "info",
          children: "\u6D88\u606F"
        }), (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).CheckBox, {
          checked: saleChecked,
          onChange: handleSaleChecked,
          style: checkstyles.checkbox,
          status: "success",
          children: "\u30AA\u30F3\u30E9\u30A4\u30F3\u8CA9\u58F2"
        }), (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).CheckBox, {
          checked: raffleChecked,
          onChange: handleRaffleChecked,
          status: "warning",
          style: checkstyles.checkbox,
          children: "\u62BD\u9078"
        })]
      }), (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[6]).Divider, {}), (0, _$$_REQUIRE(_dependencyMap[5]).jsx)(_$$_REQUIRE(_dependencyMap[8]).TabView, {
        renderTabBar: renderTabBar,
        navigationState: {
          index: index,
          routes: routes
        },
        renderScene: renderScene,
        onIndexChange: setIndex,
        initialLayout: {
          width: layout.width
        }
      })]
    });
  };
  var _default = BlogPage;
  exports.default = _default;
  var checkstyles = _reactNative.StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: "center"
    },
    checkbox: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10
    }
  });
  var datestyles = _reactNative.StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      marginLeft: 'auto'
    }
  });
  var titlestyles = _reactNative.StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: 10
    },
    button: {
      justifyContent: 'flex-end',
      marginLeft: 'auto'
    }
  });

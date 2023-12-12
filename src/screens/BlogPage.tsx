import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, useWindowDimensions } from 'react-native';
import { Datepicker, Layout, Text, Icon, IconElement, List, CheckBox, CheckBoxProps, Divider, Button, Modal, Card } from '@ui-kitten/components';
import { Blog } from '../components/Blog';
import Spinner from 'react-native-loading-spinner-overlay';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { BlogData } from '../../type';
import { APIURL } from '../constants/Constant';

const SyncIcon = (props: any): IconElement => (
  <Icon {...props} name='sync' />
);


const CalendarIcon = (props: any): IconElement => (
  <Icon
    {...props}
    name='calendar'
  />
);


const BlogPage = () => {
  const [init, setinit] = React.useState(true);
  const [blogs, setblogs] = React.useState<BlogData[]>([]);
  const [FilteredBlogs, SetFilteredBlogs] = React.useState<BlogData[]>([]);
  const [selectDate, setSelectDate] = React.useState(new Date());
  const [spinner, setspinner] = React.useState(true);

  const [newChecked, setNewsChecked] = React.useState(true);

  const [saleChecked, setSaleChecked] = React.useState(true);
  const [raffleChecked, setRaffleChecked] = React.useState(true);

  const [useDate, setUseDate] = React.useState(false);

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'allroute', title: '全部' },
    { key: 'sneaker', title: 'スニーカー' },
    { key: 'pokemon', title: 'ポケモン' },
    { key: 'console', title: 'コンソール' },
    { key: 'clothe', title: '衣服' },
    { key: 'toy', title: 'Toy' },
  ]);

  const ShowAllRoute = () => (
    <View>
      <ScrollView>
        {FilteredBlogs.map((blog: BlogData) => {
          return <Blog info={blog} key={blog.title} />
        })}
      </ScrollView>
    </View>
  );

  const SneakerRoute = () => (
    <View>
      <ScrollView>
        {FilteredBlogs.map((blog: BlogData) => {
          return (blog.category == "スニーカー" ? <Blog info={blog} key={blog.title} /> : null)
        })}
      </ScrollView>
    </View>
  );

  const PokemonRoute = () => (
    <View>
      <ScrollView>
        {FilteredBlogs.map((blog: BlogData) => {
          return (blog.category == "ポケモンカード" ? <Blog info={blog} key={blog.title} /> : null)
        })}
      </ScrollView>
    </View>
  );
  const ConsoleRoute = () => (
    <View>
      <ScrollView>
        {FilteredBlogs.map((blog: BlogData) => {
          return (blog.category == "コンソール" ? <Blog info={blog} key={blog.title} /> : null)
        })}
      </ScrollView>
    </View>
  );
  const ClotheRoute = () => (
    <View>
      <ScrollView>
        {FilteredBlogs.map((blog: BlogData) => {
          return (blog.category == "衣服" ? <Blog info={blog} key={blog.title} /> : null)
        })}
      </ScrollView>
    </View>
  );
  const ToyRoute = () => (
    <View>
      <ScrollView>
        {FilteredBlogs.map((blog: BlogData) => {
          return (blog.category == "玩具" ? <Blog info={blog} key={blog.title} /> : null)
        })}
      </ScrollView>
    </View>
  );

  const renderScene = SceneMap({
    allroute: ShowAllRoute,
    sneaker: SneakerRoute,
    pokemon: PokemonRoute,
    console: ConsoleRoute,
    clothe: ClotheRoute,
    toy: ToyRoute,
  });

  const fetchdata = () => {
    fetch(APIURL + "/api/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setblogs(result);
          if (init) {
            SetFilteredBlogs(result);
          }
          setspinner(false);
        },
        (error) => {
          console.log(error);
          setblogs([]);
          setspinner(false);
        },
      )
  }

  React.useEffect(() => {
    if (init) {
      console.log("init data");
      fetchdata();
      setinit(false);
    }
  }, [blogs])

  const handleRefreshBlog = () => {
    setspinner(true);
    fetchdata();
    filterBlog();
  }

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#EEE' }}
      scrollEnabled={true}
      activeColor='blue'
      inactiveColor='black'
    />
  );

  const handleNewsChecked = (checked: any) => {
    setNewsChecked(checked);
    let filterBlogs: BlogData[] = filterdata(blogs, useDate, selectDate, checked, saleChecked, raffleChecked);
    SetFilteredBlogs(filterBlogs);
  }

  const handleSaleChecked = (checked: boolean) => {
    setSaleChecked(checked);

    let filterBlogs: BlogData[] = filterdata(blogs, useDate, selectDate, newChecked, checked, raffleChecked);
    SetFilteredBlogs(filterBlogs);
  }

  const handleRaffleChecked = (checked: any) => {
    setRaffleChecked(checked);
    let filterBlogs: BlogData[] = filterdata(blogs, useDate, selectDate, newChecked, saleChecked, checked);
    SetFilteredBlogs(filterBlogs);
  }

  const filterBlog = () => {
    let filterBlogs: BlogData[] = filterdata(blogs, useDate, selectDate, newChecked, saleChecked, raffleChecked);
    SetFilteredBlogs(filterBlogs);
  }

  const handleSelectDate = (nextDate: any) => {
    setSelectDate(nextDate);
    let filterBlogs: BlogData[] = filterdata(blogs, useDate, nextDate, newChecked, saleChecked, raffleChecked);
    SetFilteredBlogs(filterBlogs);
  }


  const filterdata = (
    blogs: BlogData[],
    usedate: boolean,
    selectdate: Date,
    newchecked: boolean,
    salechecked: boolean,
    rafflechecked: boolean): BlogData[] => {
    let filterBlogs: BlogData[] = [];
    if (usedate) {
      for (let index = 0; index < blogs.length; index++) {
        const element = blogs[index];
        if (element.selltype == "抽選") {
          if (new Date(element.endtime).getTime() > selectdate.getTime()) {
            if (rafflechecked) {
              filterBlogs.push(blogs[index]);
            }
          }
        } else {
          if (new Date(element.date).getDate() == selectdate.getDate() && new Date(element.date).getMonth() == selectdate.getMonth()) {
            if (element.selltype == "消息" && newchecked) {
              filterBlogs.push(blogs[index]);
            } else if (element.selltype == "オンライン販売" && salechecked) {
              filterBlogs.push(blogs[index]);
            }
          }
        }
      }
    } else {
      for (let index = 0; index < blogs.length; index++) {
        const element = blogs[index];
        if (element.selltype == "消息" && newchecked) {
          filterBlogs.push(blogs[index]);
        } else if (element.selltype == "オンライン販売" && salechecked) {
          filterBlogs.push(blogs[index]);
        } else if (element.selltype == "抽選" && rafflechecked) {
          filterBlogs.push(blogs[index]);
        }
      }
    }
    return filterBlogs;
  }


  const handleUseDate = (checked: boolean) => {
    setUseDate(checked);
    let filterBlogs: BlogData[] = filterdata(blogs, checked, selectDate, newChecked, saleChecked, raffleChecked);
    SetFilteredBlogs(filterBlogs);
  }

  return (
    <>
      <Spinner
        visible={spinner}
        textContent={'更新中...'}
        textStyle={{ color: "#EEE" }}
        overlayColor='rgba(0, 0, 0, 0.6)'
      />
      <Layout style={titlestyles.container}>
        <Text category='h5'>今日の人気記事</Text>
        <Button
          style={titlestyles.button}
          appearance='ghost'
          status='primary'
          accessoryLeft={SyncIcon}
          onPress={handleRefreshBlog}
        />
      </Layout>
      <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5, marginLeft: 10 }}>
        <CheckBox
          status='basic'
          checked={useDate}
          onChange={handleUseDate}>
          日付から選ぶ
        </CheckBox>
        <Datepicker
          date={selectDate}
          onSelect={handleSelectDate}
          accessoryRight={CalendarIcon}
          style={datestyles.container}
        />
      </View>
      <Divider />
      <Layout
        style={checkstyles.container}
        level='1'
      >
        <CheckBox
          checked={newChecked}
          onChange={handleNewsChecked}
          style={checkstyles.checkbox}
          status='info'
        >
          消息
        </CheckBox>
        <CheckBox
          checked={saleChecked}
          onChange={handleSaleChecked}
          style={checkstyles.checkbox}
          status='success'
        >
          オンライン販売
        </CheckBox>
        <CheckBox
          checked={raffleChecked}
          onChange={handleRaffleChecked}
          status='warning'
          style={checkstyles.checkbox}
        >
          抽選
        </CheckBox>
      </Layout>
      <Divider />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </>

  );
};

export default BlogPage;


const checkstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center"
  },
  checkbox: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10
  },
});

const datestyles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    marginLeft: 'auto'
  },
});

const titlestyles = StyleSheet.create({
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
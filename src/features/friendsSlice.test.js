import reducer, { toChangeOrder } from "./friendsSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    byId: {
      주호민: {
        id: "주호민",
        name: "주호민",
        profileImg:
          "https://pbs.twimg.com/profile_images/1119172481653149696/hUzsqa_X_400x400.png",
      },
      침착맨: {
        id: "침착맨",
        name: "침착맨",
        profileImg:
          "https://file.mk.co.kr/meet/neds/2021/08/image_readtop_2021_745680_16278734604737346.jpg",
      },
      김풍: {
        id: "김풍",
        name: "김풍",
        profileImg:
          "https://file.mk.co.kr/meet/neds/2019/10/image_readtop_2019_789028_15699824213922127.jpg",
      },
      기안84: {
        id: "기안84",
        name: "기안84",
        profileImg:
          "https://www.sportsq.co.kr/news/photo/201906/402310_404428_5150.jpg",
      },
    },
    allIds: ["침착맨", "주호민", "김풍", "기안84"],
    sortOrder: "DESC",
  });
});

test("should handle a sort order an empty list", () => {
  expect(
    reducer(undefined, toChangeOrder("Change allIds order tests"))
  ).toEqual({
    byId: {
      주호민: {
        id: "주호민",
        name: "주호민",
        profileImg:
          "https://pbs.twimg.com/profile_images/1119172481653149696/hUzsqa_X_400x400.png",
      },
      침착맨: {
        id: "침착맨",
        name: "침착맨",
        profileImg:
          "https://file.mk.co.kr/meet/neds/2021/08/image_readtop_2021_745680_16278734604737346.jpg",
      },
      김풍: {
        id: "김풍",
        name: "김풍",
        profileImg:
          "https://file.mk.co.kr/meet/neds/2019/10/image_readtop_2019_789028_15699824213922127.jpg",
      },
      기안84: {
        id: "기안84",
        name: "기안84",
        profileImg:
          "https://www.sportsq.co.kr/news/photo/201906/402310_404428_5150.jpg",
      },
    },
    allIds: ["기안84", "김풍", "주호민", "침착맨"],
    sortOrder: "ASC",
  });
});

test("should handle a sort order an existing list", () => {
  const previousState = {
    byId: {
      주호민: {
        id: "주호민",
        name: "주호민",
        profileImg:
          "https://pbs.twimg.com/profile_images/1119172481653149696/hUzsqa_X_400x400.png",
      },
      침착맨: {
        id: "침착맨",
        name: "침착맨",
        profileImg:
          "https://file.mk.co.kr/meet/neds/2021/08/image_readtop_2021_745680_16278734604737346.jpg",
      },
      김풍: {
        id: "김풍",
        name: "김풍",
        profileImg:
          "https://file.mk.co.kr/meet/neds/2019/10/image_readtop_2019_789028_15699824213922127.jpg",
      },
      기안84: {
        id: "기안84",
        name: "기안84",
        profileImg:
          "https://www.sportsq.co.kr/news/photo/201906/402310_404428_5150.jpg",
      },
    },
    allIds: ["기안84", "김풍", "주호민", "침착맨"],
    sortOrder: "ASC",
  };

  expect(
    reducer(previousState, toChangeOrder("Change allIds order tests"))
  ).toEqual({
    byId: {
      주호민: {
        id: "주호민",
        name: "주호민",
        profileImg:
          "https://pbs.twimg.com/profile_images/1119172481653149696/hUzsqa_X_400x400.png",
      },
      침착맨: {
        id: "침착맨",
        name: "침착맨",
        profileImg:
          "https://file.mk.co.kr/meet/neds/2021/08/image_readtop_2021_745680_16278734604737346.jpg",
      },
      김풍: {
        id: "김풍",
        name: "김풍",
        profileImg:
          "https://file.mk.co.kr/meet/neds/2019/10/image_readtop_2019_789028_15699824213922127.jpg",
      },
      기안84: {
        id: "기안84",
        name: "기안84",
        profileImg:
          "https://www.sportsq.co.kr/news/photo/201906/402310_404428_5150.jpg",
      },
    },
    allIds: ["침착맨", "주호민", "김풍", "기안84"],
    sortOrder: "DESC",
  });
});

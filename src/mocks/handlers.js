import { rest } from 'msw';

const dummyData = [
  {
    name: '달러',
    second: 100,
    loss: 4,
    hold: 10,
    notWorking: 5,
    working: 10,
    workingRate: '2',
    editedDate: '2020-01-03',
    editedBy: '19-000223',
  },
  {
    name: '원',
    second: 200,
    loss: 4,
    hold: 10,
    notWorking: 5,
    working: 10,
    workingRate: '1',
    editedDate: '2020-01-03',
    editedBy: '19-000223',
  },
  {
    name: '원',
    second: 100,
    loss: 4,
    hold: 10,
    notWorking: 5,
    working: 10,
    workingRate: '2',
    editedDate: '2020-01-03',
    editedBy: '19-000223',
  },
];

const result = {
  result: true,
  data: {
    contents: dummyData,
    pagination: {
      page: 1,
      totalCount: 3,
    },
  },
};

export const handlers = [
  // toast-grid page
  rest.get('/api/basic', (req, res, ctx) => res(ctx.status(200), ctx.json(result))),
];

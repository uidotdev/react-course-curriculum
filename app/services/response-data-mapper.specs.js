import { expect } from 'chai';
import sut from './response-data-mapper';

describe('response-data-mapper', () => {
  let response;
  let expected;

  beforeEach(() => {
    response = {
      city: {
        name: 'London',
      },
      list: [
        {
          dt: 1461063600,
          temp: {
            day: 282.46,
            min: 274.31,
            max: 282.46,
            night: 274.31,
            eve: 282.46,
            morn: 282.46
          },
          humidity: 49,
          weather: [
            {
              description: 'clear sky',
              icon: '01d'
            }
          ],
        },
        {
          dt: 1461150000,
          temp: {
            day: 284.15,
            min: 271.88,
            max: 285.64,
            night: 276.36,
            eve: 283.74,
            morn: 271.88
          },
          humidity: 71,
          weather: [
            {
              description: 'clouds',
              icon: '02d'
            }
          ]
        }
      ]
    };
    
    expected = {
      cityName: 'London',
      days: [
        {
          date: new Date(2016, 3, 19, 13).toString(),
          iconCode: '01d',
          description: 'clear sky',
          humidity: 49,
          temperature: {
            morning: 9, 
            day: 9,
            evening: 9,
            night: 1
          }
        },
        {
          date: new Date(2016, 3, 20, 13).toString(),
          iconCode: '02d',
          description: 'clouds',
          humidity: 71,
          temperature: {
            morning: -1, 
            day: 11,
            evening: 11,
            night: 3
          }          
        }
      ]
    }
  });

  it('should mapp response correctly', () => {
    const result = sut.mapForecastResponse(response);
    expect(result).to.deep.equal(expected);
  })
});

// @ts-nocheck
import * as types from '../actions/types'
import reducer, {initialState} from './psp'

describe('actions', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    // it('should get number of items', () => {
    //     const text = {
    //         type: types.IS_NO_ITEMS,
    //         payload: true
    //     }

    //     const expectedAction = {
    //         isNoResult: true
    //     }
    //     expect(reducer(undefined, text)).toEqual(expectedAction)
    // })
})
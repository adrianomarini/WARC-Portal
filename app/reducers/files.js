import _ from 'lodash';
import { reducerCall } from './index';

/**
 * Wrapping reducers to keep reducers pure
 * see reducers/index.js
 */
export default function files(state = {}, action) {
    return reducerCall(state, action, reducerClass);
}

/**
 * class containing my reducers
 *
 */
class reducerClass {

    /**
     * reducer used when fetching files succeeds. Setting the store state
     * with the files retrieved.
     * @param {object} new state
     * @param {object} action being called with payload from fetcthing files
     *
     */

    static fetchFilesSuccess(new_state, action) {
        console.log("file actioN", action);
        new_state = action.files;
        return new_state;
    }

}

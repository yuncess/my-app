import 'whatwg-fetch';
import { host } from 'config/host';

/**
 * 封装get请求
 * @param input url 不需要 host 域名
 * @param data json
 * @param init header数据等
 */
function get(input, data, init) {
  if (data && typeof input === 'string') {
    let params = Object.keys(data)
      .map((key) => `${key}=${encodeURIComponent(data[key])}`)
      .join('&');

    input += `${input.indexOf('?') == -1 ? '?' : '&'}${params}`;
  }
  return Fetch(_insertHost(input), init);
}

/**
 * 封装post请求
 * @param input url不需要 host 域名
 * @param data json
 * @param init header数据等
 */
function post<T>(input, data, init) {
  let opts = init || {};
  opts.method = 'POST';
  if (data) {
    opts.body = JSON.stringify(data);
  } else {
    delete opts.body;
  }

  return Fetch(_insertHost(input), opts);
}

function _fetch(
  input,
  init,
  opts = { insertHost: true, showTip: true, isReload: true }
) {
  let { insertHost } = opts;
  return Fetch(
    insertHost == null || insertHost ? _insertHost(input) : input,
    init,
    opts
  );
}

function _insertHost(input: RequestInfo) {
  if (typeof input === 'string') {
    return host.apiHost + input;
  } else {
    return input;
  }
}

/**
 * 封装业务fetch
 * @param input 输入url等
 * @param init 初始化http header信息等
 */
async function Fetch(
  input,
  init,
  otherOpts = { showTip: true, isReload: true }
) {
  //封装请求信息
  const request = {
    method: 'GET',
    mode: 'cors', //跨域请求
    headers: {
      'Content-Type': 'application/json',
      Authorization: '',
    },
    ...init,
  };

  let suggestion, code;
  try {
    const response = await window.fetch(input, request);
    const responseData = await response.json();
    const { message, suggestion, data, ok, code } = responseData;
    const result =
      typeof data === 'boolean' ? data : data || (data === 0 && '0') || message;
    return {
      // 有时会返回0的结果
      res: ok ? result : data ? data : null,
      err: ok || !!data ? null : new Error(message),
      suggestion,
      code,
    };
  } catch (err) {
    //trace error
    return {
      res: null,
      err: err,
      suggestion,
      code,
    };
  }
}

const Api = {
  get,
  post,
  _fetch,
};

export default Api;

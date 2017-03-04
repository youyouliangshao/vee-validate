const messages = {
    after: (field, [target]) => `${field}는 ${target} 뒤에 와야 합니다.`,
    alpha_dash: (field) => `${field}는 영문자와 숫자 그리고 대시, 언더스코어를 사용할 수 있습니다.`,
    alpha_num: (field) => `${field}는 영문자와 숫자만 사용할 수 있습니다.`,
    alpha_spaces: (field) => `${field}는 영문자와 공백만 사용할 수 있습니다.`,
    alpha: (field) => `${field}는 영문자만 사용할 수 있습니다.`,
    before: (field, [target]) => `${field}는 ${target} 앞에 와야 합니다.`,
    between: (field, [min, max]) => `${field}는 ${min} 와 ${max} 사이 값이어야 합니다.`,
    confirmed: (field, [confirmedField]) => `${field}는 ${confirmedField}와 일치하지 않습니다.`,
    date_between: (field, [min, max]) => `${field}는 ${min}와 ${max} 사이의 날짜이어야 합니다.`,
    date_format: (field, [format]) => `${field}는 ${format} 형식이어야 합니다.`,
    decimal: (field, [decimals] = ['*']) => `${field}는 숫자이어야 하고 ${decimals === '*' ? '' : decimals} 소숫점을 가질 수 있습니다.`,
    digits: (field, [length]) => `${field}는 숫자이고 ${length} 길이를 필요합니다.`,
    dimensions: (field, [width, height]) => `${field}는 ${width}px과 ${height}px 이어야 합니다.`,
    email: (field) => `${field}는 올바른 이메일 형식이어야 합니다.`,
    ext: (field) => `${field}는 올바른 파일 형식이어야 합니다.`,
    image: (field) => `${field}는 이미지 파일이어야 합니다.`,
    in: (field) => `${field}는 올바른 값이어야 합니다.`,
    ip: (field) => `${field}는 올바른 IP 주소이어야 합니다.`,
    max: (field, [length]) => `${field}는 ${length}보다 길어야 합니다.`,
    max_value: (field, [max]) => `${field}는 최대한 ${max} 보다 작어야 합니다.`,
    mimes: (field) => `${field}는 올바른 파일이어야 합니다.`,
    min: (field, [length]) => `${field}는 최소한 ${length} 보다 커야 합니다.`,
    min_value: (field, [min]) => `${field} ${min} 보다 커야합니다.`,
    not_in: (field) => `${field}는 올바른 값이어야 합니다.`,
    numeric: (field) => `${field}는 영문자이어야 합니다.`,
    regex: (field) => `${field}는 형식에 맞지 않습니다.`,
    required: (field) => `${field}가 필요합니다.`,
    size: (field, [size]) => `${field}는 ${size} KB 보다 작아야 합니다.`,
    url: (field) => `${field}는 올바른 URL이 아닙니다.`
};

const locale = {
    name: 'ko',
    messages,
    attributes: {}
};

if (typeof VeeValidate !== 'undefined' && VeeValidate && typeof VeeValidate.Validator) {
    VeeValidate.Validator.addLocale(locale);
}

export default locale;

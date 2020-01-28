import isNullOrUndefined from './isNullOrUndefined';
import { isObjectType } from './isObject';
import { Primitive } from '../types';

export default (value: unknown): value is Primitive =>
  isNullOrUndefined(value) || !isObjectType(value);

import { FilterPattern } from '@rollup/pluginutils'
import { Plugin } from 'rollup'

export interface Options {
  /**
   * Determine which files are transpiled by Typescript (all `.ts` and
   * `.tsx` files by default).
   */
  include?: FilterPattern
  /**
   * Determine which files are transpiled by Typescript (all `.ts` and
   * `.tsx` files by default).
   */
  exclude?: FilterPattern
}

export default function bucklescript(options?: Options): Plugin

import { ProductService } from '@/app/core';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

export const heroResolver: ResolveFn<any> = (
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot,
) => {
  return inject(ProductService).getListProduct();
};

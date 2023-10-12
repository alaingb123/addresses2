import { IsString, IsOptional, IsNotEmpty, IsNumberString, IsPostalCode, IsPhoneNumber, MaxLength, MinLength } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  street_address: string;

  @IsOptional()
  @IsString()
  street_address2?: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  @IsPostalCode('US') // Validar código postal según el país (en este caso, Estados Unidos)
  postal_code: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10) // Mínimo 10 dígitos
  @MaxLength(15) // Máximo 15 dígitos
//  @IsPhoneNumber(null) // Validar número de teléfono según el país (automáticamente detectado) , Desabilitado para pruebas
  phone_number: string;
}
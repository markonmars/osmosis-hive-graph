import { Test, TestingModule } from '@nestjs/testing'
import { StakingResolver } from './staking.resolver'

describe('StakingResolver', () => {
  let resolver: StakingResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StakingResolver],
    }).compile()

    resolver = module.get<StakingResolver>(StakingResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})

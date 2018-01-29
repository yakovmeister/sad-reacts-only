import passport from 'passport'
import {
    ExtractJwt,
    Strategy as JwtStrategy
} from 'passport-jwt'

const opts = {}

passport.use(new JwtStrategy(opts, function callback(payload, done) {
    console.log(payload)
}))